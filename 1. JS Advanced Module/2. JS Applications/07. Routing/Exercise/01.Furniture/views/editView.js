import { html, render } from '../node_modules/lit-html/lit-html.js';
import { get, put } from '../api/api.js';
import page from '../node_modules/page/page.mjs';

export async function editView(context)  {
    
    const id = context.params.id;

    const data = await get(`/data/catalog/${id}`);

    const template = html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form id="${id}" @submit=${editFurniture}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="${data.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model" value="${data.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year" value="${data.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="${data.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="${data.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="${data.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${data.material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
    `
    const div = document.querySelector('.container');
    render(template, div);
}

async function editFurniture(e) {
    e.preventDefault();
    const id = e.target.id;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    let isTrue = checker(data);
       
    if(isTrue) {
        const obj = {
            make: data.make,
            model: data.model,
            year: data.year,
            description: data.description,
            price: data.price,
            img: data.img,
            material: data.material,
        }
        await put(`/data/catalog/${id}`, obj);
        page.redirect('/');
    }

}

function checker(data) {

    let make = document.getElementById('new-make');
    let model = document.getElementById('new-model');
    let year = document.getElementById('new-year');
    let desc = document.getElementById('new-description');
    let price = document.getElementById('new-price');
    let img = document.getElementById('new-image');
    let material = document.getElementById('new-material');

    let bool = true;

    if(data.make.length < 4 || data.model < 4) {
        make.classList.add('is-invalid');
        model.classList.add('is-invalid');
        bool = false;
    } else {
        make.classList.remove('is-invalid');
        model.classList.remove('is-invalid')
        make.classList.add('is-valid');
        model.classList.add('is-valid');
        bool = true;
    }

    if(data.year < 1950 || data.year > 2050) {
        year.classList.add('is-invalid');
        bool = false;
    } else {
        year.classList.add('is-valid');
        year.classList.remove('is-invalid');
        bool = true;
    }

    if(data.description.length < 10) {
        desc.classList.add('is-invalid');
        bool = false;
    } else {
        desc.classList.add('is-valid');
        desc.classList.remove('is-invalid');
        bool = true;
    }

    if(data.price <= 0) {
        price.classList.add('is-invalid');
        bool = false;
    } else {
        price.classList.add('is-valid');
        price.classList.remove('is-invalid');
        bool = true;
    }

    if(data.img === '') {
        img.classList.add('is-invalid');
        bool = false;
    } else {
        img.classList.add('is-valid');
        img.classList.remove('is-invalid');
        bool = true;
    }

    return bool;

}