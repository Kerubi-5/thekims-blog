import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const BlogCard = () => {
  return (
    <li>
      <Card>
        <CardHeader>
          <CardTitle>Blog 1</CardTitle>
          <CardDescription>By TheKims Blog</CardDescription>
        </CardHeader>
        <CardContent>The thing about cards is that its a blog</CardContent>
        <CardFooter>
          <button>
            <ExternalLink />
          </button>
        </CardFooter>
      </Card>
    </li>
  );
};

export default BlogCard;
