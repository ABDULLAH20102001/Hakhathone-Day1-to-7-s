
// Deploimint versul ma error hai 

// export default {
//   name: 'product',
//   type: 'document',
//   title: 'Product',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Name',
//       validation: (Rule: any) => Rule.required().error('Name is required'),
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'Image',
//       options: {
//         hotspot: true,
//       },
//       description: 'Upload an image of the product.',
//     },
//     {
//       name: 'price',
//       type: 'string',
//       title: 'Price',
//       validation: (Rule: any) => Rule.required().error('Price is required'),
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description',
//       validation: (Rule: any) =>
//         Rule.max(150).warning('Keep the description under 150 characters.'),
//     },
//     {
//       name: 'slug',
//       type: 'slug',
//       title: 'Slug',
//       description: 'A unique URL-friendly identifier for the product.',
//       options: {
//         source: 'name', // Automatically generate a slug from the product name
//         maxLength: 96, // Maximum length of the slug
//       },
//       validation: (Rule: any) => Rule.required().error('Slug is required'),
//     },
//     {
//       name: 'discountPercentage',
//       type: 'number',
//       title: 'Discount Percentage',
//       validation: (Rule: any) =>
//         Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
//     },
//     {
//       name: 'isFeaturedProduct',
//       type: 'boolean',
//       title: 'Is Featured Product',
//     },
//     {
//       name: 'stockLevel',
//       type: 'number',
//       title: 'Stock Level',
//       validation: (Rule: any) => Rule.min(0).error('Stock level must be a positive number.'),
//     },
//     {
//       name: 'category',
//       type: 'string',
//       title: 'Category',
//       options: {
//         list: [
//           { title: 'Chair', value: 'Chair' },
//           { title: 'Sofa', value: 'Sofa' },
//         ],
//       },
//       validation: (Rule: any) => Rule.required().error('Category is required'),
//     },
//   ],
// };














import { Rule } from 'sanity'; // Import the Rule type from sanity

const productSchema = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required().error('Name is required'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image of the product.',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      validation: (Rule: Rule) => Rule.required().error('Price is required'),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: Rule) =>
        Rule.max(150).warning('Keep the description under 150 characters.'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'A unique URL-friendly identifier for the product.',
      options: {
        source: 'name', // Automatically generate a slug from the product name
        maxLength: 96, // Maximum length of the slug
      },
      validation: (Rule: Rule) => Rule.required().error('Slug is required'),
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      validation: (Rule: Rule) =>
        Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Is Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      validation: (Rule: Rule) =>
        Rule.min(0).error('Stock level must be a positive number.'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Chair', value: 'Chair' },
          { title: 'Sofa', value: 'Sofa' },
        ],
      },
      validation: (Rule: Rule) => Rule.required().error('Category is required'),
    },
  ],
};

export default productSchema;
