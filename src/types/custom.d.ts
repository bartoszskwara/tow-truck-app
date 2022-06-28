declare module '*.svg' {
    import { ReactElement, SVGProps } from 'react';
    export const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
    export default ReactComponent;
}
