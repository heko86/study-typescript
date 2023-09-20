import { TwitterCard } from "@/components/TwitterCard";
import path from "path";

export default function Home() {
  return (
    <TwitterCard
      user={{ name: "みや", accountName: "miyamiya", image: "" }}
      analytics={[
        { path: "", count: 111 },
        { path: "", count: 222 },
        { path: "", count: 333 },
      ]}
      body={{
        text: "おはようございます",
      }}
      type="tweet"
    />
  );
}
