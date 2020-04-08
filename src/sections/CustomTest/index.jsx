import React from 'react';

import Card from '../../components/Card';

function CustomText() {
  return (
    <section>
      <Card
        headline="Foo Bar Test"
        copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis voluptas corporis numquam sapiente omnis asperiores, tempore possimus sed harum eveniet ex explicabo magni eum, quod nesciunt, ipsam voluptatem facilis."
        link={{
          href: 'https://google.com',
          text: 'Link Text',
        }}
      />
    </section>
  );
}

export default CustomText;
