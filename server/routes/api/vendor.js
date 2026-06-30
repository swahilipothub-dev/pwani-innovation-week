import express from 'express';
import Vendor from '../../models/Vendor.js';

const router = express.Router();

const toBool = (v) => v === true || v === 'true' || v === 'on' || v === 1 || v === '1';

router.post('/', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      agree_terms,
      agree_communications,
      business_name,
      business_address,
      business_description,
      is_registered,
      business_phone,
      business_email,
      vendor_type,
      is_accepted
    } = req.body;

    const required = {
      first_name,
      last_name,
      email,
      phone_number,
      business_name,
      business_address,
      business_description,
      business_phone,
      business_email,
      vendor_type,
      agree_terms,
      agree_communications
    };

    const missing = Object.entries(required)
      .filter(([_, v]) => v === undefined || v === null || String(v).trim() === '')
      .map(([k]) => k);

    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: { missing_fields: missing }
      });
    }

    const allowedTypes = ['food', 'drinks', 'food and drinks'];
    if (!allowedTypes.includes(String(vendor_type))) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: { vendor_type: `Must be one of: ${allowedTypes.join(', ')}` }
      });
    }

    const payload = {
      first_name: String(first_name).trim(),
      last_name: String(last_name).trim(),
      email: String(email).trim(),
      phone_number: String(phone_number).trim(),
      agree_terms: toBool(agree_terms),
      agree_communications: toBool(agree_communications),
      business_name: String(business_name).trim(),
      business_address: String(business_address).trim(),
      business_description: String(business_description).trim(),
      is_registered: toBool(is_registered),
      business_phone: String(business_phone).trim(),
      business_email: String(business_email).trim(),
      vendor_type: String(vendor_type),
      is_accepted: is_accepted !== undefined ? toBool(is_accepted) : undefined
    };

    const vendor = new Vendor(payload);
    await vendor.save();

    return res.status(201).json({
      success: true,
      message: 'Vendor created successfully',
      data: vendor
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Unable to create vendor',
      error: error.message
    });
  }
});

export default router;