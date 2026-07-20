
import React, { useState, useEffect, useRef } from "react";
import utils from "../../lib/utils";



const Card = /*#__PURE__*/React.forwardRef(({
  className,
  ...props
}, ref) => /*#__PURE__*/<div ref={ref} className={(0, utils.cn)("rounded-xl border bg-card text-card-foreground shadow", className)} {...props} />);

Card.displayName = "Card";
const CardHeader = /*#__PURE__*/React.forwardRef(({
  className,
  ...props
}, ref) => /*#__PURE__*/<div ref={ref} className={(0, utils.cn)("flex flex-col space-y-1.5 p-6", className)} {...props} />);

CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/React.forwardRef(({
  className,
  ...props
}, ref) => /*#__PURE__*/<div ref={ref} className={(0, utils.cn)("font-semibold leading-none tracking-tight", className)} {...props} />);

CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/React.forwardRef(({
  className,
  ...props
}, ref) => /*#__PURE__*/<div ref={ref} className={(0, utils.cn)("text-sm text-muted-foreground", className)} {...props} />);

CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/React.forwardRef(({
  className,
  ...props
}, ref) => /*#__PURE__*/<div ref={ref} className={(0, utils.cn)("p-6 pt-0", className)} {...props} />);

CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/React.forwardRef(({
  className,
  ...props
}, ref) => /*#__PURE__*/<div ref={ref} className={(0, utils.cn)("flex items-center p-6 pt-0", className)} {...props} />);

CardFooter.displayName = "CardFooter";

export default Card;
