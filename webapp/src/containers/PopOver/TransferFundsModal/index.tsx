import React from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { WALLET_SEND_PATH } from '../../../constants';

import {
  closeTransferFundsModal,
  transferFundsStart,
} from '../../PopOver/reducer';

interface TransferFundsModalProps {
  history: any;
  isTransferFundsModalOpen: boolean;
  closeTransferFundsModal: () => void;
  transferFundsStart: (history: any) => void;
}

const TransferFundsModal: React.FunctionComponent<TransferFundsModalProps> = (
  props: TransferFundsModalProps
) => {
  const {
    isTransferFundsModalOpen,
    history,
    closeTransferFundsModal,
    transferFundsStart,
  } = props;

  const temp = () => {
    closeTransferFundsModal();
    props.history.push(
      `${WALLET_SEND_PATH}?txAddress=te1WMD1Mc6QTxhTVnB2TisrNgZCSsojfSX&txAmount=256`
    );
  };

  return (
    <Modal isOpen={isTransferFundsModalOpen} centered>
      <ModalBody>
        <h1 className='h4'>{I18n.t('alerts.transferFundsModalHeader')}</h1>
        <p>{I18n.t('alerts.transferFundsNotice')}</p>
      </ModalBody>
      <ModalFooter>
        <Button size='sm' color='link' onClick={closeTransferFundsModal}>
          {I18n.t('alerts.noTransferFundsNotice')}
        </Button>
        <Button
          size='sm'
          color='primary'
          onClick={() => {
            transferFundsStart(history)
          }}
        >
          {I18n.t('alerts.yesTransferFundsNotice')}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  const { isTransferFundsModalOpen } = state.popover;

  return {
    isTransferFundsModalOpen,
  };
};

const mapDispatchToProps = {
  closeTransferFundsModal,
  transferFundsStart: (history: any) => transferFundsStart({ history }),
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferFundsModal);
