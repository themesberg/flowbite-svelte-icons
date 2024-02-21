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
export type PlaySolidProps = typeof __propDef.props;
export type PlaySolidEvents = typeof __propDef.events;
export type PlaySolidSlots = typeof __propDef.slots;
export default class PlaySolid extends SvelteComponentTyped<PlaySolidProps, PlaySolidEvents, PlaySolidSlots> {
}
export {};
