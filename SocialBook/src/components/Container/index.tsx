import React, { PropsWithChildren } from 'react'
import "./Container.scss";

interface ContainerProps extends PropsWithChildren {
    className?: string;
}

const Container: React.FC<ContainerProps> = ({
    children,
    className,
}) => {
  return (
    <div className={`container${className ? ` ${className}` : ""}`}>
        {children}
    </div>
  )
}

export default Container