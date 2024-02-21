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
export type CheckPlusCircleSolidProps = typeof __propDef.props;
export type CheckPlusCircleSolidEvents = typeof __propDef.events;
export type CheckPlusCircleSolidSlots = typeof __propDef.slots;
export default class CheckPlusCircleSolid extends SvelteComponentTyped<CheckPlusCircleSolidProps, CheckPlusCircleSolidEvents, CheckPlusCircleSolidSlots> {
}
export {};
