import React from 'react';
import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles.js';

const LINK_REL = 'nofollow noreferrer noopener';

const ListItem = () => {
    return (
        <Item>
            <ExternalLink href='https://www.github.com' rel={LINK_REL} target="_blank">
                <Title>
                    The Developer Community <Host>(github.com)</Host>
                </Title>
            </ExternalLink>
            <Description>
                5000 points by{' '}
                <CommentLink href="#" rel={LINK_REL} target="_blank">
                    Test User
                </CommentLink>{' '}
                1 Hour Ago {' | '}
                <CommentLink href="#" rel={LINK_REL} target="_blank">
                    40 Comments
                </CommentLink>
            </Description>
        </Item>
    );
};

export default ListItem;