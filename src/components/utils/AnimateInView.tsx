import clsx from "clsx";
import { CSSTransition } from "react-transition-group";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import {
  createElement,
  CSSProperties,
  ElementType,
  FC,
  PropsWithChildren,
} from "react";
import type { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimateInViewProps = {
  /**
   * Render the wrapping element as this element.
   * @default `'div'`
   */
  as?: ElementType<any>;
  className?: string;
  intersectionOptions?: IntersectionOptions;
  style?: CSSProperties;
  transitionProps?: Omit<CSSTransitionProps, "in">;
};

const AnimateInView: FC<PropsWithChildren<AnimateInViewProps>> = ({
  as,
  children,
  className,
  intersectionOptions,
  style,
  transitionProps,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    ...intersectionOptions,
  });

  const transitionWrapperClasses =
    transitionProps?.classNames &&
    `${transitionProps?.classNames} ${transitionProps?.classNames}-enter`;

  return (
    <CSSTransition in={inView} timeout={0} {...transitionProps}>
      {createElement(
        as || "div",
        {
          ref: ref,
          className: clsx(transitionWrapperClasses, className),
          style,
        },
        children
      )}
    </CSSTransition>
  );
};

export default AnimateInView;
