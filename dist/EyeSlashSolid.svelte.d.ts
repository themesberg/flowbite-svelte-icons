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
export type EyeSlashSolidProps = typeof __propDef.props;
export type EyeSlashSolidEvents = typeof __propDef.events;
export type EyeSlashSolidSlots = typeof __propDef.slots;
export default class EyeSlashSolid extends SvelteComponentTyped<EyeSlashSolidProps, EyeSlashSolidEvents, EyeSlashSolidSlots> {
}
export {};
