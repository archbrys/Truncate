# Truncate react functional component

A functional component for your project which truncate a string that you provide..

> 
## Usage

```jsx
import React, { Component } from 'react'

import Truncate from './Truncate'

class Example extends Component {
    render () {

        // You can also pass how many line before it truncate
        return (
            <Truncate line={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae euismod nulla sed consequat ante. Proin convallis, ex a maximus pellentesque, ante lectus convallis ante, egestas lacinia mauris augue sit amet nisi. Aliquam pellentesque, arcu eu efficitur elementum, nunc lacus accumsan justo, in egestas erat orci ut ante  proin quis maximus neque. Aliquam sed mollis velit. Mauris egestas semper viverra. Ut vel dapibus mauris. Pellentesque bibendum nunc consectetur velit malesuada, quis consectetur
                tellus volutpat.
            </Truncate>
        )
    }
}
```

## License
MIT © [archbrys](https://github.com/archbrys)
