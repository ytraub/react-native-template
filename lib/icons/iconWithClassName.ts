import type { LucideIcon } from 'lucide-react-native';
import { cssInterop } from 'nativewind';

export function iconWithClassName(icons: LucideIcon[]) {
    for (const icon of icons) {
        cssInterop(icon, {
            className: {
                target: 'style',
                nativeStyleToProp: {
                    color: true,
                    opacity: true,
                },
            },
        });
    }
}