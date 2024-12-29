// import React, { ReactNode } from "react";

// interface BentoCardProps {
//   name: string;
//   className?: string; // className is optional
//   background: ReactNode;
//   Icon: React.ElementType; // React ElementType is used for components that are passed as props
//   description: string;
//   href: string;
//   cta: string;
// }

// const BentoCard: React.FC<BentoCardProps> = ({
//   name,
//   className,
//   background,
//   Icon,
//   description,
//   href,
//   cta,
// }: BentoCardProps) => {
//   return (
//     <div className={`bento-card ${className}`}>
//       {/* Background */}
//       <div className="bento-card__background">{background}</div>

//       {/* Card content */}
//       <div className="bento-card__content">
//         {/* Icon */}
//         <div className="bento-card__icon">
//           <Icon />
//         </div>

//         {/* Card details */}
//         <h3 className="bento-card__name">{name}</h3>
//         <p className="bento-card__description">{description}</p>

//         {/* Call to action */}
//         <a href={href} className="bento-card__cta">
//           {cta}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default BentoCard;
