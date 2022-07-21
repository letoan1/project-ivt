import React, { useState } from 'react'
import { Input,
    Form,
    Select,
    Button,
    InputNumber,
    Tag
} 
from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { addNewProduct } from '../redux/Actions/productAction';

const NewProductForm = ({data, mode}) => {
    const { TextArea } = Input;
    const { Option } = Select;
    const { CheckableTag } = Tag;
    const dispatch = useDispatch()
    // product state
    const [product, setProduct] = useState( () => {
        const _product = mode?data:{
            name: '',
            description: '',
            category: '',
            brand: '',
            price: '',
            capacity: '',
            discount: 0,
            tag: '',
            srcImage: '',
        }
        return _product
    })
    console.log(product);
    // tags data
    const [selectedTags, setSelectedTags] = useState([])
    const tagsData = ['new arrival', 'best seller', 'summer', 'spring', 'winter', 'autumn', 'men', 'women', 'sale-off'];

    // form layout
    const layout = {
        labelCol: {
            lg: {
                span: 4,
                offset: 0
            },
            md: {
                span: 24,
                offset: 1,
            },
            sm: {
                span: 24,
                offset: 1,
            },
        },
        wrapperCol: {
            lg: {
                span: 16,
                offset: 0,
            },
            md: {
                span: 24,
                offset: 1,
            },
            sm: {
                span: 24,
                offset: 1,
            }
        },
    };

    // handle events
    const onFinish = () => {
        if (mode) {
            // const {products} = useSelector(state => state.products)
            // const index = products.findIndex()
        }
        const cloneProduct = { id: new Date().getTime(), ...product}
        dispatch(addNewProduct(cloneProduct))
    };
    const handleChangeProductName = (e) => {
        setProduct({
            ...product,
            name: e.target.value,
        })
    }
    const handleChangeDescription = (e) => {
        setProduct({
            ...product,
            description: e.target.value,
        })
    }
    const handleChangeSrcImage = (e) => {
        setProduct({
            ...product,
            srcImage: e.target.value,
        })
    }
    const handleChangeCategory = (value) => {
        setProduct({
            ...product,
            category: value,
        })
    };
    const handleChangeBrand = (value) => {
        setProduct({
            ...product,
            brand: value,
        })
    };
    const onChangePrice = (value) => {
        setProduct({
            ...product,
            price: value,
        })
    };
    const onChangeCapacity = (value) => {
        setProduct({
            ...product,
            capacity: value,
        })
    };
    const onChangeDiscount = (value) => {
        setProduct({
            ...product,
            discount: value,
        })
    };

    const handleChangeTag = (tag, checked) => {
        const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);
        setProduct({
            ...product,
            tag: selectedTags,
        })
    };

    return (
        <Form {...layout} onFinish={onFinish} name='product-form'>
            <Form.Item
                // name="product-name"
                label="Product Name"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Input 
                    value={product?.name} 
                    onChange={handleChangeProductName}
                    placeholder="Product's name"
                />
            </Form.Item>
            <Form.Item
                // name='description'
                label="Description"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <TextArea 
                    rows={4} 
                    value={product.description} 
                    onChange={handleChangeDescription}
                    placeholder="Product's description"
                />
            </Form.Item>
            <Form.Item
                // name="category"
                label="Category"
                rules={[
                    {
                    required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Select category of product"
                    style={{width: 250}}
                    onChange={handleChangeCategory}
                    defaultValue={product.category}
                    >
                    <Option value="men's">Men's</Option>
                    <Option value="women's">Women's</Option>
                </Select>
            </Form.Item>
            <Form.Item
                // name="brand"
                label="Brand"
                rules={[
                    {
                    required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Select brand of product"
                    style={{width: 250}}
                    onChange={handleChangeBrand}
                    defaultValue={product.brand}
                >
                    <Option value="dior">Dior</Option>
                    <Option value="chanel">Chanel</Option>
                    <Option value="gucci">Gucci</Option>
                    <Option value="prada">Prada</Option>
                    <Option value="ysl">YSL</Option>
                    <Option value="versace">Versace</Option>
                    <Option value="other">Other...</Option>
                </Select>
            </Form.Item>
            <Form.Item
                // name="price"
                label="Price"
                rules={[
                    {
                    type: Number,
                    required: true,
                    },
                ]}
            >
                <InputNumber 
                    style={{width: 200,}} 
                    min={0}
                    max={100000000}
                    step={50000} 
                    value={product.price}
                    onChange={onChangePrice} 
                /> VND
            </Form.Item>
            <Form.Item
                // name="capacity"
                label="Capacity"
                rules={[
                    {
                    type: Number,
                    required: true,
                    },
                ]}
            >
                <InputNumber 
                    style={{width: 100,}} 
                    min={0}
                    max={150}
                    step={5} 
                    value={product.capacity}
                    onChange={onChangeCapacity} 
                /> ml
            </Form.Item>
            <Form.Item
                // name="discount"
                label="Discount"
                rules={[
                    {
                    type: Number,
                    },
                ]}
            >
                <InputNumber 
                    style={{width: 100,}} 
                    min={0}
                    max={100}
                    step={5}
                    value={product.discount}
                    onChange={onChangeDiscount}
                /> %
            </Form.Item>
            <Form.Item
                label="Tag"
                // name="tag"
                rules={[
                    {
                    type: Array,
                    required: true,
                    },
                ]}
            >
                {tagsData.map((tag) => (
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange={(checked) => handleChangeTag(tag, checked)}
                        value={tag}
                    >
                        {tag}
                    </CheckableTag>
                ))}                                                   
            </Form.Item>
            <Form.Item
                label="Product Images"
                // name="image"
                rules={[
                    {
                    required: true,
                    },
                ]}
            >
                <Input 
                    value={product.srcImage} 
                    onChange={handleChangeSrcImage}
                    placeholder="Link to product's image"
                />
            </Form.Item>
            <Form.Item wrapperCol={{
                span: 24,
                offset: 10,
            }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default NewProductForm;