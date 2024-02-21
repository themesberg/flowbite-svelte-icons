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
export type GoogleSolidProps = typeof __propDef.props;
export type GoogleSolidEvents = typeof __propDef.events;
export type GoogleSolidSlots = typeof __propDef.slots;
export default class GoogleSolid extends SvelteComponentTyped<GoogleSolidProps, GoogleSolidEvents, GoogleSolidSlots> {
}
export {};
