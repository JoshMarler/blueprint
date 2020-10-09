import { colors } from '../Styles'

export const ButtonsDemoStyles = {
    standard_button: {
        'justify-content': 'center',
        'align-items': 'center',
        'width': '25%',
        'height': '25%',
        'border-radius': 5.0,
        'border-width': 2.0,
        'border-color': colors.primaryAccent
    },
    secondary_button: {
        'justify-content': 'center',
        'align-items': 'center',
        'width': '25%',
        'height': '25%',
        'border-width': 2.0,
        'border-color': colors.primaryAccent,
        'border-radius': '100%',
        'background-color': colors.primaryAccent
    },
    drawable_button: {
        'width': '25%',
        'height': '25%',
    },
    button_text: {
        'font-size': 18.0,
        'line-spacing': 1.6
    }
}

export const drawButton = (ctx: CanvasRenderingContext2D,
                           width: number,
                           height: number,
                           down: boolean,
                           text?: string) => {
}
