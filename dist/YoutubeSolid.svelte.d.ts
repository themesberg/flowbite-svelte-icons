import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        role?: string | undefined;
        class?: string | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type YoutubeSolidProps = typeof __propDef.props;
export type YoutubeSolidEvents = typeof __propDef.events;
export type YoutubeSolidSlots = typeof __propDef.slots;
export default class YoutubeSolid extends SvelteComponentTyped<YoutubeSolidProps, YoutubeSolidEvents, YoutubeSolidSlots> {
}
export {};
