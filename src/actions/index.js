export const AddTodo = 'Add';
export const CompleteTodo = 'Complete';
export const SetVisibilityTodo = 'Set';

export const VisibilityTodos = {
    ShowAll: 'ShowAll',
    ShowCompleted: 'ShowCompleted',
    ShowActive: 'ShowActive'
}


export function Add(text){
    return {
        type: AddTodo,
        text
    }
}

export function Complete(index){
    return {
        type: CompleteTodo,
        index
    }
}

export function SetVisibility(filter){
    return {
        type: SetVisibilityTodo,
        filter
    }
}