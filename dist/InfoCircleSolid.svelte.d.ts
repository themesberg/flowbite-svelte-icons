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
export type InfoCircleSolidProps = typeof __propDef.props;
export type InfoCircleSolidEvents = typeof __propDef.events;
export type InfoCircleSolidSlots = typeof __propDef.slots;
export default class InfoCircleSolid extends SvelteComponentTyped<InfoCircleSolidProps, InfoCircleSolidEvents, InfoCircleSolidSlots> {
}
export {};
