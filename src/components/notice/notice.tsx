import React from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import noticeStyles from './notice.module.css';

type TNoticeProps = {
  text: string;
  onClose?: (e: React.SyntheticEvent) => void;
};

const Notice: React.FC<TNoticeProps> = ({
  text,
  onClose
}) => (
  <div className={noticeStyles['notice']}>
    <span className="text text_type_main-default">{text}</span>
    <button
      className={noticeStyles['close']}
      onClick={onClose}
      type="button"
    >
      <CloseIcon type="primary" />
    </button>
  </div>
);

export default Notice;
