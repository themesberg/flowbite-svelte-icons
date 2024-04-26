import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        role?: string | undefined;
        color?: string | undefined;
        withEvents?: boolean | undefined;
        onclick?: ((event: MouseEvent) => void) | undefined;
        onkeydown?: ((event: KeyboardEvent) => void) | undefined;
        onkeyup?: ((event: KeyboardEvent) => void) | undefined;
        class?: string | undefined;
    } & {
        title?: {
            id?: string | undefined;
            title?: string | undefined;
        } | undefined;
        desc?: {
            id?: string | undefined;
            desc?: string | undefined;
        } | undefined;
        ariaLabel?: string | undefined;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProfileCardSolidProps = typeof __propDef.props;
export type ProfileCardSolidEvents = typeof __propDef.events;
export type ProfileCardSolidSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props:
 */
export default class ProfileCardSolid extends SvelteComponent<ProfileCardSolidProps, ProfileCardSolidEvents, ProfileCardSolidSlots> {
}
export {};
