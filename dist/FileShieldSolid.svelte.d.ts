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
export type FileShieldSolidProps = typeof __propDef.props;
export type FileShieldSolidEvents = typeof __propDef.events;
export type FileShieldSolidSlots = typeof __propDef.slots;
export default class FileShieldSolid extends SvelteComponentTyped<FileShieldSolidProps, FileShieldSolidEvents, FileShieldSolidSlots> {
}
export {};
