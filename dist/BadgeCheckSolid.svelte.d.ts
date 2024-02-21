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
export type BadgeCheckSolidProps = typeof __propDef.props;
export type BadgeCheckSolidEvents = typeof __propDef.events;
export type BadgeCheckSolidSlots = typeof __propDef.slots;
export default class BadgeCheckSolid extends SvelteComponentTyped<BadgeCheckSolidProps, BadgeCheckSolidEvents, BadgeCheckSolidSlots> {
}
export {};
