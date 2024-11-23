import { Card, Typography } from "@mui/material";
import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import { useRouter } from "next/navigation";

interface ActionAreaCardProps {
  title: string;
  // total: string;
  // rate: string;
  head1: string;
  head2: string;
  head3: string;
  image: string;
  link: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children?: React.ReactNode;
}

export default function ActionAreaCard({
  title,
  // total,

  head1,
  head2,
  head3,
  image,
  levelUp,
  link,
  levelDown,
  children,
}: ActionAreaCardProps) {
  const router = useRouter(); // Initialize the useRouter hook

  const handleClick = () => {
    router.push(link); // Navigate to the passed link
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6  shadow-default dark:border-strokedark dark:bg-boxdark">
      <Card sx={{ maxWidth: 345, maxHeight: 345 }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            sx={{ width: 400, height: 200 }}
            image={image} //"./images/product/car-4.png" // You can pass this as a prop too
            alt="image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            {/* <Typography variant="h6" component="div">
            {total}
          </Typography> */}
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {head1}
            </Typography>
            {levelUp && (
              <Typography variant="body2" color="green">
                {head2}
              </Typography>
            )}
            {levelDown && (
              <Typography variant="body2" color="red">
                {head3}
              </Typography>
            )}
            {children}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
