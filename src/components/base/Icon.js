import Github from '/public/assets/icons/Github.svg';
import Linkedin from '/public/assets/icons/Linkedin.svg';
import Telegram from '/public/assets/icons/Telegram.svg';

export const Icon = ({ name, className, width = 32, height = 32 }) => {
  switch (name) {
    case 'Github':
      return <Github className={className} width={width} height={height} />;
    case 'Linkedin':
      return <Linkedin className={className} width={width} height={height} />;
    case 'Telegram':
      return <Telegram className={className} width={width} height={height} />;
  }
};
