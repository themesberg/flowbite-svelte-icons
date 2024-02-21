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
export type PapperPlaneSolidProps = typeof __propDef.props;
export type PapperPlaneSolidEvents = typeof __propDef.events;
export type PapperPlaneSolidSlots = typeof __propDef.slots;
export default class PapperPlaneSolid extends SvelteComponentTyped<PapperPlaneSolidProps, PapperPlaneSolidEvents, PapperPlaneSolidSlots> {
}
export {};
