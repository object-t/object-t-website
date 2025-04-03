import { useTranslation } from "react-i18next";
import { ActivityCard, type ActivityCardProps } from "~/components/ActivityCard/ActivityCard";
import { Header, type HeaderProps } from "~/components/Header/Header";
import { MemberCard, type MemberCardProps } from "~/components/MemberCard/MemberCard";
import { NoticeCard, type NoticeCardProps } from "~/components/NoticeCard/NoticeCard";
import { ProductCard, type ProductCardProps } from "~/components/ProductCard/ProductCard";
import { Title } from "../components/Title/Title";
import type { Route } from "./+types/home";
import "./home.css";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const headers: HeaderProps = {
  headers: [
    {
      'label': "HOME",
      'to': "#home"
    },
    {
      'label': "MEMBER",
      'to': "#member"
    },
    {
      'label': "PRODUCT",
      'to': "#product"
    },
    {
      'label': "ACTIVITY",
      'to': "#activity"
    },
    {
      'label': "BLOG",
      'to': "#blog"
    }
  ]
}

const members: MemberCardProps[] = [
  { name: "Naoto Kido", role: "owner", description: "よわよわプログラマー", stacks: ['Kubernetes', 'AWS', 'Java', 'Go-wordmark', 'Flutter'], headerImage: "https://pbs.twimg.com/profile_banners/1846395762277826560/1737992837/1500x500", iconImage: "https://avatars.githubusercontent.com/u/54303857", githubName: "naoido" },
  { name: "Miura Naoki", role: "coowner", description: "ねこねこプログラマー", stacks: ['Go-wordmark', 'Javascript', 'Rust', 'Python', 'Neovim'], headerImage: "https://cdn.discordapp.com/attachments/1325818102960623729/1350589227477504051/IMG_0649.jpg?ex=67edb33c&is=67ec61bc&hm=52b978d0b55914eef3fb9015748e4b496f4bb16d207d648bdc97a28a05a82bc8&", iconImage: "https://avatars.githubusercontent.com/u/114989748", githubName: "thirdlf03" },
  { name: "Takumi Matsubara", role: "frontend", description: "うまうまプログラマー", stacks: ['Typescript', 'Swift', 'React'], headerImage: "https://cdn.discordapp.com/attachments/1325818102960623729/1350615961505366016/IMG_7620.jpg?ex=67edcc22&is=67ec7aa2&hm=7aaf0e07ab67d2484cb9c54fa09ebb329082606cad3218443a3985c4f2aac415&", iconImage: "https://avatars.githubusercontent.com/u/152017354", githubName: "AnnkoATAMA" },
  { name: "Kentaro Doi", role: "backend", description: "メンズコーチ", stacks: ['Javascript', 'Python', 'Php', 'Laravel', 'Typescript'], headerImage: "https://cdn.discordapp.com/attachments/1325818102960623729/1350718393178656799/jpg.jpg?ex=67ee2b88&is=67ecda08&hm=54e2abad70d172d4ec551a3a47fd89b2deefc2ee738f0debbe9f4a0543453bee&", iconImage: "https://avatars.githubusercontent.com/u/148222450", githubName: "kenta-afk" },
]

const notices: NoticeCardProps[] = [
  { date: "開催日: 2025年5月12日(月)", title: "学内ハッカソン開催", description: "今回は学内のスキルアップを目指して学内ハッカソンを開催することになりました！詳細ページはこちらをクリック！", tags: ["hackathon", "recruitment"], imageUrl: "/app/components/assets/logo.webp" },
  { date: "開催日: 2025年8月32日(月)", title: "LT会", description: "勉強したことをアウトプットするために、LT会を開催することにしました", tags: ["hackathon", "recruitment"], imageUrl: "https://avatars.githubusercontent.com/u/54303857" }
]

const products: ProductCardProps[] = [
  { headerImage: "https://pbs.twimg.com/profile_banners/1846395762277826560/1737992837/1500x500", title: "ねこbot", stacks: ["Go-wordmark", "Jenkins"], description: "ねこbotは団体discordで運用しているbotです。団体内での情報共有や、AIによる質問返答、グループ管理の役割を担っています。", stars: 1, commits: 142, pullRequests: 75, linkedButtons: [{ label: "Github", url: "https://github.com/naoido/neko-bot" }] },
  { headerImage: "https://pbs.twimg.com/profile_banners/1846395762277826560/1737992837/1500x500", title: "団体公式サイト", stacks: ["Cloudflare", "React", "Cloudflareworkers"], description: "団体公式のウェブサイトです。Reactで構成されており、Cloudfalre Workers使用し記事の更新などを行い、Cloudflare Pagesにデプロイしています。", stars: 2, commits: 86, pullRequests: 54, linkedButtons: [{ label: "Github", url: "https://github.com/object-t/object-t-website" }, { label: "Figma", url: "https://www.figma.com/design/YWBtX9qhd0QKOTY4a2SEWx" }] }
]

const activities: ActivityCardProps[] = [
  { headerImage: "https://pbs.twimg.com/media/GmZOyaFacAA4vCx?format=jpg&name=large", title: "複数名でのハッカソン参加", from: new Date("2025-03-17T12:00:00.000Z"), to: new Date("2025-03-19T12:00:00.000Z"), description: "今回は、メンバー5人でのハッカソンに参加をしました！1人のチームと、スキルアップを目指している4人の計2グループでの参加です！", url: "https://github.com/object-t/object-t-website" },
  { headerImage: "https://pbs.twimg.com/media/GkyBWsiaoAA0nwH?format=jpg&name=medium", title: "2度目のハッカソン優勝", from: new Date("2025-02-26T12:00:00.000Z"), to: new Date("2024-02-27T12:00:00.000Z"), description: "今回も株式会社ハックツ様のハッカソンに参加してきました！株式会社ヌーラボ様のオフィスをお借りしてのハッカソン、そして年1回の野良ハッカソンだったのでとても楽しかったです！そして副代表のthirld03が優勝しました！！", url: "https://github.com/object-t/object-t-website" },
  { headerImage: "https://pbs.twimg.com/media/Ge1P7h9bkAARNb9?format=jpg&name=medium", title: "ハックツハッカソン初優勝", from: new Date("2024-03-01T12:00:00.000Z"), to: new Date("2024-03-02T12:00:00.000Z"), description: "株式会社ハックツ様主催のハッカソン「アンキロカップ」にて最優秀賞を獲得しました!2日間のハッカソン期間中徹夜で仕上げ、気持ちを込めた作品だったので優勝できてとても嬉しかったです！！", url: "https://github.com/object-t/object-t-website" },
  { headerImage: "/app/components/assets/logo.webp", title: "学生団体Object<T>結成", from: new Date("2024-03-01T12:00:00.000Z"), description: "念願の学生団体Object<T>を結成しました！これからたくさんの学生のスキルアップなどを目指した学生団体を目指し、この学生団体に入ってよかったと思っていただけるような団体を目指しがんばります！", url: "https://github.com/object-t/object-t-website" }
]
export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="home-main-container">
      <header>
        <Header headers={headers.headers} />
      </header>
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
          <h1>「Object」のような<br/>全ての出発地点になることを目指す</h1>
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
    </main>
  );
}
