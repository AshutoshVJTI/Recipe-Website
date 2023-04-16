import React from "react";

interface TypoProps {
  children: React.ReactNode;
  fontFamily: string;
  className?: string;
}

const Typo = (props: TypoProps) => {
  const { children, fontFamily, className } = props;
  return (
    <div style={{ fontFamily: fontFamily }} className={`${className}`}>
      {children}
    </div>
  );
};

export default Typo;
