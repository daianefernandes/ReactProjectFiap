import styled from 'styled-components';
import { BorderRadiuses, Colors, Shadows } from '../../shared/DesignTokens';

export const Card = styled.div`
    background-color: ${Colors.NEUTRAL_WHITE};
    border-radius: ${BorderRadiuses.TWO};
	height: 100%;
    margin: 20px 12px 20px 12px; 
    padding: 20px;
    shadow: ${Shadows.TWO}
	width: 100%;
`;