import { NewComponent } from '../../../src/components/new-component/new-component';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '_codux/wrappers/component-wrapper';

export default createBoard({
    name: 'NewComponent',
    Board: () => (
        <ComponentWrapper>
            <ContentSlot ><NewComponent /></ContentSlot>
        </ComponentWrapper>
    ),
});
