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
export type UploadSolidProps = typeof __propDef.props;
export type UploadSolidEvents = typeof __propDef.events;
export type UploadSolidSlots = typeof __propDef.slots;
export default class UploadSolid extends SvelteComponentTyped<UploadSolidProps, UploadSolidEvents, UploadSolidSlots> {
}
export {};
