import React, {
    ComponentType,
    Context,
    ForwardRefExoticComponent,
    MemoExoticComponent,
    PropsWithoutRef,
    useContext,
} from 'react';

export default <P, C, R = {}>(ContextInstance: Context<C>) =>
    (
        WrappedComponent: ComponentType<P & C>
    ): MemoExoticComponent<
        ForwardRefExoticComponent<PropsWithoutRef<Omit<P, keyof C>>>
    > => {
        const EnhancedComponent = React.forwardRef<R, Omit<P, keyof C>>(
            (props, ref) => {
                const context = useContext<C>(ContextInstance) || {};
                return (
                    <WrappedComponent
                        ref={ref}
                        {...(context as C)}
                        {...(props as P)}
                    />
                );
            }
        );
        EnhancedComponent.displayName = WrappedComponent.displayName;
        return React.memo(EnhancedComponent);
    };
