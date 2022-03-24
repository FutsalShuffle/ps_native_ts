import Config from '../../Config';
import localStorage from './../localstorage/LocalStorage';

const AjaxProviderGet = async (action: String) => {
    let token: string = await localStorage.getJwt();
    let response: Response = await fetch(Config.API + action, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    let json = await response.json();
    return json;
}

const AjaxProviderPost = async (action: String, data: any = {}) => {
    let token: string = await localStorage.getJwt();
    var form_data = new FormData();

    for (var key in data) {
        form_data.append(key, data[key]);
    }
    let response: Response = await fetch(Config.API + action, {
        method: 'POST',
        body: form_data,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    let json = await response.json();
    return json;
}

export {
    AjaxProviderGet,
    AjaxProviderPost
};
