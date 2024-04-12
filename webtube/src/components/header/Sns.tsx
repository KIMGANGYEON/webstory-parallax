import React from "react";

import { snsLink } from "../../data/header";

export const Sns = () => {
  return (
    <div className="sns">
      <ul>
        {snsLink.map((sns, key) => (
          <li key={key}>
            <a
              href={sns.url}
              target="_black"
              rel="noopener noreferrer"
              area-label={sns.title}
            >
              <span>{sns.icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sns;
