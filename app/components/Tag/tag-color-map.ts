import type {TagKind} from "~/components/Tag/Tag";


export const tagColorMap: Record<TagKind, Record<"text" | "backgroundColor", string>> = {
    hackathon: {
        text: "common.tags.hackathon",
        backgroundColor: "#46D782"
    },
    recruitment: {
        text: "common.tags.recruitment",
        backgroundColor: "#4685D7"
    },
    urgent: {
        text: "common.tags.urgent",
        backgroundColor: "#f44336"
    }
};
