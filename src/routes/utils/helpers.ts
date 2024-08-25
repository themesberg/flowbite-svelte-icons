import type { Component } from 'svelte';
import { type ListType, sidebarList } from 'runes-webkit';
import { PaletteOutline, RocketOutline } from '$lib';

export function convertToKebabCase(str: string) {
  // Use replace() method with a regular expression to match all whitespace characters (\s) globally (g flag)
  // and replace them with '-'
  return str.replace(/\s/g, '-').toLowerCase();
}

export const extra: ListType[] = [
  {
    name: 'Solid Icons',
    Icon: RocketOutline as Component,
    href: '/solid-icons'
  },
  {
    name: 'Outline Icons',
    Icon: PaletteOutline as Component,
    href: '/outline-icons'
  }
];
export const newSidebarList: ListType[] = [...sidebarList, ...extra];

