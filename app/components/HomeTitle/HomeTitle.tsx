import './HomeTitle.css';

export const HomeTitle = () => {
    const beforeT = "Object<";
    const t = "T";
    const afterT = ">";

    return (
        <h1 className="home-title">
            {beforeT}<span className="t-highlight">{t}</span>{afterT}
        </h1>
    );
}