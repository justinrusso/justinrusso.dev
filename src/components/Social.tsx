import { FC } from "react";
import config from "../config";

const Social: FC = () => {
  return (
    <ul>
      {config.socials.map(({ Icon, name, url }) => (
        <li key={name}>
          <a href={url} target="_blank" rel="noreferrer" title={name}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
