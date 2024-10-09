"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutSubscriptionBody } from "../checkout-sessions/route";

interface Feature {
  title: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  price: number;
  features: string[];
  popular?: boolean;
}

interface PricingCardProps extends PricingPlan {
  isSelected: boolean;
  onClick: () => void;
  onChoose: (amount: number) => void;
  isLoading: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  popular,
  isSelected,
  onClick,
  onChoose,
  isLoading,
}) => (
  <div
    onClick={onClick}
    className={`relative cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
      isSelected
        ? "scale-105 border-blue-500 bg-blue-50"
        : "border-gray-200 bg-white hover:border-blue-300"
    }`}
  >
    {popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
        Popular
      </span>
    )}
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-500 ml-1">/mo</span>
        </div>
      </div>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-blue-500" />
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => !isLoading && onChoose(price)}
        className={`w-full rounded-lg px-4 py-2 font-medium transition-colors ${
          isSelected
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
        } ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
        disabled={isLoading}
      >
        Choose Plan
      </button>
    </div>
  </div>
);

const PricingCards = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const plans: PricingPlan[] = [
    {
      title: "Starter",
      price: 29,
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Rental size: 1 Vehicle",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      title: "Company",
      price: 99,
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Rental size: 10 Vehicle",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
      popular: true,
    },
    {
      title: "Enterprise",
      price: 499,
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Rental size:unlimited",
        "Premium support: 36 months",
        "Free updates: lifetime",
      ],
    },
  ];

  // Define the handleClick function
  const handleClick = async (amount: number) => {
    try {
      setIsLoading(true);

      // step 1: load stripe
      const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
      const stripe = await loadStripe(STRIPE_PK);

      // step 2: define the data for monthly subscription
      const body: CheckoutSubscriptionBody = {
        interval: "month",
        amount: amount * 100, // Convert to cents
        plan: "Monthly",
        planDescription: `Subscribe for LKR ${amount} per month`,
      };

      // step 3: make a post fetch api call to /checkout-session handler
      const result = await fetch("/payment_gateway/checkout-sessions", {
        method: "post",
        body: JSON.stringify(body, null),
        headers: {
          "content-type": "application/json",
        },
      });

      // step 4: get the data and redirect to checkout using the sessionId
      const data = (await result.json()) as Stripe.Checkout.Session;
      const sessionId = data.id!;
      await stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error during checkout:", error);
      setIsLoading(false);
    }
  };

  return (
    <section className="relative mx-auto max-w-5xl p-6">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex space-x-2">
            <div className="h-3 w-3 animate-bounce rounded-full bg-blue-700 [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-blue-700 [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 animate-bounce rounded-full bg-blue-700"></div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            {...plan}
            isSelected={selectedPlan === index}
            onClick={() => setSelectedPlan(index)}
            onChoose={handleClick}
            isLoading={isLoading}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
