import type { Route } from "./+types/home";
import { Title } from "../components/Title/Title";
import "./home.css";
import { MemberCard } from "~/components/MemberCard/MemberCard";
import type { MemberCardProps } from "~/components/MemberCard/MemberCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const members: MemberCardProps[] = [
    { name: "Naoto Kido", role: "代表", description: "よわよわプログラマー", stacks: ['Kubernetes', 'AWS', 'Java', 'Go-wordmark', 'Flutter'], headerImage: "https://pbs.twimg.com/profile_banners/1846395762277826560/1737992837/1500x500", iconImage: "https://avatars.githubusercontent.com/u/54303857", githubName: "naoido" },
    { name: "Miura Naoki", role: "副代表", description: "ねこねこプログラマー", stacks: ['Go-wordmark', 'Javascript', 'Rust', 'Python', 'Neovim'], headerImage: "https://cdn.discordapp.com/attachments/1325818102960623729/1350589227477504051/IMG_0649.jpg?ex=67edb33c&is=67ec61bc&hm=52b978d0b55914eef3fb9015748e4b496f4bb16d207d648bdc97a28a05a82bc8&", iconImage: "https://avatars.githubusercontent.com/u/114989748", githubName: "thirdlf03" },
    { name: "Takumi Matsubara", role: "フロントエンド", description: "うまうまプログラマー", stacks: ['Typescript', 'Swift', 'React'], headerImage: "https://cdn.discordapp.com/attachments/1325818102960623729/1350615961505366016/IMG_7620.jpg?ex=67edcc22&is=67ec7aa2&hm=7aaf0e07ab67d2484cb9c54fa09ebb329082606cad3218443a3985c4f2aac415&", iconImage: "https://avatars.githubusercontent.com/u/152017354", githubName: "AnnkoATAMA" },
    { name: "Kentaro Doi", role: "バックエンド", description: "メンズコーチ", stacks: ['Javascript', 'Python', 'Php', 'Laravel', 'Typescript'], headerImage: "https://cdn.discordapp.com/attachments/1325818102960623729/1350718393178656799/jpg.jpg?ex=67ee2b88&is=67ecda08&hm=54e2abad70d172d4ec551a3a47fd89b2deefc2ee738f0debbe9f4a0543453bee&", iconImage: "https://avatars.githubusercontent.com/u/148222450", githubName: "kenta-afk" },
  ]

  return (
    <main className="home-main-container">
      <div className="home-title-container">
        <Title label="Object<T>" subLabel="学生の未来をもっと「明るく」" variant="home">
        </Title>
      </div>
      <div className="home-section-left">
        <Title align="left" label="NOTICE" subLabel="お知らせ" variant="section">
        </Title>
      </div>
      <div>
        <div className="home-section-left">
          <Title align="left" label="ABOUT" subLabel="団体について" variant="section">
          </Title>
        </div>
      </div>
      <div>
        <div className="home-section-left">
          <Title align="left" label="MEMBER" subLabel="メンバー紹介" variant="section">
          </Title>
        </div>
        <div className="home-member-card-layout">
          <div className="home-member">
            {members.map((member, index) => (
              <MemberCard {...member} key={index}></MemberCard>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="home-section-right">
          <Title align="right" label="PRODUCT" subLabel="成果物" variant="section">
          </Title>
        </div>
      </div>
      <div>
        <Title align="right" label="ACTIVITY" subLabel="活動履歴" variant="section">
        </Title>
      </div>
    </main>
  );
}
