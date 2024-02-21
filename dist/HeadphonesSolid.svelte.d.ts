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
export type HeadphonesSolidProps = typeof __propDef.props;
export type HeadphonesSolidEvents = typeof __propDef.events;
export type HeadphonesSolidSlots = typeof __propDef.slots;
export default class HeadphonesSolid extends SvelteComponentTyped<HeadphonesSolidProps, HeadphonesSolidEvents, HeadphonesSolidSlots> {
}
export {};
