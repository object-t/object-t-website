import { useTranslation } from "react-i18next";
import { ActivityCard, type ActivityCardProps } from "~/components/ActivityCard/ActivityCard";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { MemberCard, type MemberCardProps } from "~/components/MemberCard/MemberCard";
import { NoticeCard, type NoticeCardProps } from "~/components/NoticeCard/NoticeCard";
import { ProductCard, type ProductCardProps } from "~/components/ProductCard/ProductCard";
import { Title } from "../components/Title/Title";
import type { Route } from "./+types/home";
import "./home.css";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "団体公式ホームページ | Object<T>" },
  ];
}

const members: MemberCardProps[] = [
  { name: "Naoto Kido", role: "owner", description: "card.memberCard.descriptions.naoido", stacks: ['Kubernetes', 'AWS', 'Java', 'Go-wordmark', 'Flutter'], headerImage: "/assets/images/headers/naoido.webp", iconImage: "https://avatars.githubusercontent.com/u/54303857", githubName: "naoido" },
  { name: "Naoki Miura", role: "coowner", description: "card.memberCard.descriptions.thirdlf03", stacks: ['Go-wordmark', 'Javascript', 'Rust', 'Python', 'Neovim'], headerImage: "/assets/images/headers/thirdlf03.webp", iconImage: "https://avatars.githubusercontent.com/u/114989748", githubName: "thirdlf03" },
  { name: "Takumi Matsubara", role: "frontend", description: "card.memberCard.descriptions.annkoatama", stacks: ['Typescript', 'Python', 'Java', 'Swift', 'React'], headerImage: "/assets/images/headers/annkoatama.webp", iconImage: "https://avatars.githubusercontent.com/u/152017354", githubName: "AnnkoATAMA" },
  { name: "Kentaro Doi", role: "backend", description: "card.memberCard.descriptions.kenta-afk", stacks: ['Python', 'php', 'Laravel', 'Typescript', 'Javascript'], headerImage: "/assets/images/headers/kenta_afk.webp", iconImage: "https://avatars.githubusercontent.com/u/148222450", githubName: "kenta-afk" },
]

const notices: NoticeCardProps[] = [
  { date: "公開日: 2025年4月9日(水)", title: "団体公式サイト開設", description: "団体公式サイト開設が公開されました。これから技術ブログの開設など順次アップデートしていく予定です！", tags: []},
  
]

const products: ProductCardProps[] = [
  { headerImage: "/assets/images/products/neko-bot.webp", title: "card.products.neko-bot.title", stacks: ["Go-wordmark", "ArgoCD"], description: "card.products.neko-bot.description", stars: 1, commits: 142, pullRequests: 75, linkedButtons: [{ label: "Github", url: "https://github.com/naoido/neko-bot" }] },
  { headerImage: "/assets/images/products/website.webp", title: "card.products.website.title", stacks: ["Cloudflare", "React", "Cloudflareworkers", "Storybook"], description: "card.products.website.description", stars: 2, commits: 86, pullRequests: 54, linkedButtons: [{ label: "Github", url: "https://github.com/object-t/object-t-website" }, { label: "Figma", url: "https://www.figma.com/design/YWBtX9qhd0QKOTY4a2SEWx" }] }
]

const activities: ActivityCardProps[] = [
  { headerImage: "https://pbs.twimg.com/media/GmZOyaFacAA4vCx?format=jpg&name=large", title: "複数名でのハッカソン参加", from: new Date("2025-03-17T12:00:00.000Z"), to: new Date("2025-03-19T12:00:00.000Z"), description: "今回は、メンバー5人でのハッカソンに参加をしました！1人のチームと、スキルアップを目指している4人の計2グループでの参加です！", url: "https://x.com/Hackz_team/status/1902294529446965727" },
  { headerImage: "https://pbs.twimg.com/media/GkyBWsiaoAA0nwH?format=jpg&name=medium", title: "2度目のハッカソン優勝", from: new Date("2025-02-26T12:00:00.000Z"), to: new Date("2024-02-27T12:00:00.000Z"), description: "今回も株式会社ハックツ様のハッカソンに参加してきました！株式会社ヌーラボ様のオフィスをお借りしてのハッカソン、そして年1回の野良ハッカソンだったのでとても楽しかったです！そして副代表のthirld03が優勝しました！！", url: "https://x.com/Hackz_team/status/1895031776290185529" },
  { headerImage: "https://pbs.twimg.com/media/Ge1P7h9bkAARNb9?format=jpg&name=medium", title: "ハックツハッカソン初優勝", from: new Date("2024-12-15T12:00:00.000Z"), to: new Date("2024-12-16T12:00:00.000Z"), description: "株式会社ハックツ様主催のハッカソン「アンキロカップ」にて最優秀賞を獲得しました!2日間のハッカソン期間中徹夜で仕上げ、気持ちを込めた作品だったので優勝できてとても嬉しかったです！！", url: "https://x.com/Hackz_team/status/1868237310086770791" },
  { headerImage: "/assets/logo.webp", title: "学生団体Object<T>結成", from: new Date("2024-11-20T12:00:00.000Z"), description: "念願の学生団体Object<T>を結成しました！これからたくさんの学生のスキルアップなどを目指した学生団体を目指し、この学生団体に入ってよかったと思っていただけるような団体を目指しがんばります！", url: "https://github.com/object-t/object-t-website" }
]
export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="home-main-container">
      <Header />
      <div className="home-title-container" id="home">
        <div className='title-container home-title-container'>
          <h1 className={`title home-center-title`}>
            Object&lt;<span className="t-highlight">T</span>&gt;
          </h1>
          <p className={`sub-title home-sub-title`}>
            {t("common.subtitle")}
          </p>
        </div>
      </div>
      <section id="notice">
        <div className="home-section-left">
          <Title align="left" label="NOTICE" subLabel="お知らせ">
          </Title>
        </div>
        <div className="home-notice-container">
          <hr className="home-notice-divider" />
          <div className="home-notice">
            {notices.map((notice, index) => (
              <NoticeCard {...notice} key={index}></NoticeCard>
            ))}
          </div>
          <hr className="home-notice-divider" />
        </div>
      </section>
      <section id="about">
        <div className="home-section-left">
          <Title align="left" label="ABOUT" subLabel="団体について">
          </Title>
        </div>
        <div className="home-about-title">
          <h1>「Object」のような<br />全ての出発地点になることを目指す</h1>
        </div>
        <div className="home-about-content">
          <p>昨今、小学校でのプログラミング教育の義務化や、共通テストで「情報」という科目が追加されるなど、プログラミングを触れる機会が増えてきています。しかし、プログラミングの”楽しさ”や”魅力”というのは深く知る機会がないと思います。<br />そこで私たちは、活動を通してプログラミングでしか得ることができない楽しみや感動を知ってもらい、プログラマーの第一歩を踏み出すきっかけになってもらうことを目指します。</p>
        </div>
      </section>
      <section id="member">
        <div className="home-section-left">
          <Title align="left" label="MEMBER" subLabel="メンバー紹介">
          </Title>
        </div>
        <div className="home-member-card-layout">
          <div className="home-member">
            {members.map((member, index) => (
              <MemberCard {...member} key={index}></MemberCard>
            ))}
          </div>
        </div>
      </section>
      <section id="product">
        <div className="home-section-right">
          <Title align="right" label="PRODUCT" subLabel="成果物">
          </Title>
        </div>
        <div className="home-product-card-layout">
          <div className="home-product">
            {products.map((product, index) => (
              <ProductCard {...product} key={index}></ProductCard>
            ))}
          </div>
        </div>
      </section>
      <section id="activity">
        <div className="home-section-right">
          <Title align="right" label="ACTIVITY" subLabel="活動履歴">
          </Title>
        </div>
        <div className="home-activity-card-layout">
          <div className="home-activity">
            {activities.map((activity, index) => (
              <ActivityCard {...activity} key={index}></ActivityCard>
            ))}
          </div>
        </div>
      </section>
      <div className="home-footer">
        <Footer />
      </div>
    </main>
  );
}
