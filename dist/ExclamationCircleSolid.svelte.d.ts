import { SvelteComponent } from "svelte";
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
export type ExclamationCircleSolidProps = typeof __propDef.props;
export type ExclamationCircleSolidEvents = typeof __propDef.events;
export type ExclamationCircleSolidSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?: "xs" | "sm" | "md" | "lg" | "xl";
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?: string;
 */
export default class ExclamationCircleSolid extends SvelteComponent<ExclamationCircleSolidProps, ExclamationCircleSolidEvents, ExclamationCircleSolidSlots> {
}
export {};
