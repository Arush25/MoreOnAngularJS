var app = angular.module('myApp', [])
    .controller('myCtrl', function ($scope, $http) {
        $scope.emplist = [];
        var masterList = {
            "status": "success",
            "message": "Manage Tax Lists",
            "data": [{
                "_id": {
                    "parent_sec_no": "form_vi_a",
                    "parent_name": "Chapter VI A",
                    "parent_order": 1
                },
                "detail": [{
                    "sec_no": "80C",
                    "sec_name": "Part-II Investment U\/s Sec 80C can be made upto Rs. 1.5 Lac together",
                    "details": [{
                        "id": 1,
                        "name": "Life Insurance Premium [ LIP ]",
                        "limit": 150000,
                        "tax_type": 1
                    }, {
                        "id": 2,
                        "name": "Public Provident Fund [ PPF ]",
                        "limit": 150000,
                        "tax_type": 2
                    }, {
                        "id": 3,
                        "name": "Subscription to National Saving Certificate [NSC] VII Issue",
                        "limit": 150000,
                        "tax_type": 3
                    }, {
                        "id": 4,
                        "name": "Unit Linked Plan [ ULIP ]",
                        "limit": 150000,
                        "tax_type": 4
                    }, {
                        "id": 5,
                        "name": "Employee's Share of PF & VPF Contribution",
                        "limit": 150000,
                        "tax_type": 5
                    }, {
                        "id": 6,
                        "name": "Senior Citizen's Saving Scheme [SCSS]",
                        "limit": 150000,
                        "tax_type": 6
                    }, {
                        "id": 7,
                        "name": "Tax Saving Fixed Deposit [5 Years and above] or 5 Year Post Office Time Deposit [POTD] Scheme",
                        "limit": 150000,
                        "tax_type": 7
                    }, {
                        "id": 8,
                        "name": "Tax Savings Bonds",
                        "limit": 150000,
                        "tax_type": 8
                    }, {
                        "id": 9,
                        "name": "New Pension Scheme [NPS] [u\/s 80CCC]",
                        "limit": 150000,
                        "tax_type": 9
                    }, {
                        "id": 10,
                        "name": "80 CCD Central Govt. Employees Pension Plan [u\/s 80CCD]",
                        "limit": 150000,
                        "tax_type": 10
                    }, {
                        "id": 11,
                        "name": "Housing. Loan [Principal Repayment]",
                        "limit": 150000,
                        "tax_type": 11
                    }, {
                        "id": 12,
                        "name": "SIP - more than 3 years lock in period",
                        "limit": 150000,
                        "tax_type": 12
                    }, {
                        "id": 13,
                        "name": "Sukanya Samriddhi Account",
                        "limit": 150000,
                        "tax_type": 13
                    }, {
                        "id": 14,
                        "name": "Stamp Duty & Registration Charges",
                        "limit": 150000,
                        "tax_type": 14
                    }, {
                        "id": 15,
                        "name": "Children's Tuition Fee",
                        "limit": 150000,
                        "tax_type": 15
                    }, {
                        "id": 16,
                        "name": "Pension Plan from Insurance Companies\/Mutual Funds [u\/s 80CCC]",
                        "limit": 150000,
                        "tax_type": 16
                    }, {
                        "id": 57,
                        "name": "ELSS Investment in the Unit of Government approved plan framed under equity Linked Saving Scheme (For Self Only)",
                        "limit": 150000,
                        "tax_type": 57
                    }]
                }, {
                    "sec_no": "80CCD",
                    "sec_name": "NPS Contribution upto Rs. 50000 'in addition to 1.5 Lakh' is deductible under 80CCD (1B)",
                    "details": [{
                        "id": 21,
                        "name": "Contribution under Sec 80CCD National Pension Scheme 'Max Rs 50,000\/-'",
                        "limit": null,
                        "tax_type": 21
                    }]
                }, {
                    "sec_no": "80CCG",
                    "sec_name": "Section- 80CCG- RGESS",
                    "details": [{
                        "id": 22,
                        "name": "U\/s 80CCG- Payment towards Rajiv Gandhi Equity Saving Scheme-50% of the amount invested or Rs. 25000 whichever is lower",
                        "limit": 25000,
                        "tax_type": 22
                    }]
                }, {
                    "sec_no": "80D",
                    "sec_name": "80D",
                    "details": [{
                        "id": 17,
                        "name": "U\/s 80D- Medical Insurance Premium Individual, Spouse & children",
                        "limit": 25000,
                        "tax_type": 17
                    }, {
                        "id": 18,
                        "name": "U\/s 80D- Medical Insurance Premium Parents not being Sr. Citizens",
                        "limit": 25000,
                        "tax_type": 18
                    }, {
                        "id": 19,
                        "name": "U\/s 80D- Medical Insurance Premium Parents are Sr. Citizens",
                        "limit": 50000,
                        "tax_type": 19
                    }]
                }, {
                    "sec_no": "80DD",
                    "sec_name": "80DD",
                    "details": [{
                        "id": 23,
                        "name": "U\/s 80DD- Medical treatment for dependent Handicap 'if more than 80% Disability'",
                        "limit": 75000,
                        "tax_type": 23
                    }, {
                        "id": 24,
                        "name": "U\/s 80DD- Medical treatment for dependent Handicap 'if more than 40% Disability'",
                        "limit": 125000,
                        "tax_type": 24
                    }]
                }, {
                    "sec_no": "80DDB",
                    "sec_name": "U\/s 80DDB for self or dependents for specified diseases",
                    "details": [{
                        "id": 25,
                        "name": "Medical Treatment Expenses for Special Diseases (Below 60 years)",
                        "limit": 40000,
                        "tax_type": 25
                    }, {
                        "id": 26,
                        "name": "Medical Treatment Expenses for Special Diseases (More than 60 and Below 80 years)",
                        "limit": 100000,
                        "tax_type": 26
                    }, {
                        "id": 27,
                        "name": "Medical Treatment Expenses for Special Diseases (More 80 years)",
                        "limit": 100000,
                        "tax_type": 27
                    }]
                }, {
                    "sec_no": "80E",
                    "sec_name": "Section 80E - Payment of interest on the loan for higher education",
                    "details": [{
                        "id": 29,
                        "name": "Section 80E - Payment of interest on the loan for higher education 'Deduction allowed in Initial Assessment Year and 7 preceding years.'",
                        "limit": null,
                        "tax_type": 29,
                        "info": "Higher education can be an expensive affair in today\u2019s economic conditions. Section 80E does not have an upper limit which can be claimed for tax deduction, provided that deductions are claimed only for 8 years. This deduction is not available for the principal amount and only interest is considered for deduction."
                    }]
                }, {
                    "sec_no": "80EE",
                    "sec_name": "Section 80EE - Interest on loan availed in 2020-21",
                    "details": [{
                        "id": 31,
                        "name": "Section 80EE - Interest on loan availed in 2020-21 for Residential House property from Financial Institute",
                        "limit": null,
                        "tax_type": 31
                    }]
                }, {
                    "sec_no": "80G",
                    "sec_name": "Section 80G - Donation",
                    "details": [{
                        "id": 28,
                        "name": "Donation (Upto 100%)",
                        "limit": null,
                        "tax_type": 28
                    }, {
                        "id": 60,
                        "name": "Donation (Upto 50%) - consider 50% of amount filled for calculations",
                        "limit": null,
                        "tax_type": 60
                    }]
                }, {
                    "sec_no": "80GG",
                    "sec_name": "U\/s 80GG House Rent",
                    "details": [{
                        "id": 30,
                        "name": "80GG For Rent in case of no HRA Component",
                        "limit": 5000,
                        "tax_type": 30
                    }]
                }, {
                    "sec_no": "80TTA",
                    "sec_name": "Bank Interest",
                    "details": [{
                        "id": 32,
                        "name": "U\/S 80TTA Bank Interest",
                        "limit": null,
                        "tax_type": 32
                    }]
                }, {
                    "sec_no": "80U",
                    "sec_name": "U\/s 80U permanent physical disability",
                    "details": [{
                        "id": 33,
                        "name": "U\/s 80U permanent physical disability for Tax assessee only (Person with Severe Disability atleast 80%)",
                        "limit": 125000,
                        "tax_type": 33
                    }, {
                        "id": 59,
                        "name": "U\/s 80U permanent physical disability for Tax assessee only (Person with General Disability below 80%)",
                        "limit": 75000,
                        "tax_type": 59
                    }]
                }]
            }, {
                "_id": {
                    "parent_sec_no": "other_exemptions",
                    "parent_name": "Other Exemptions",
                    "parent_order": 2
                },
                "detail": [{
                    "sec_no": "Section16",
                    "sec_name": "Section 16",
                    "details": [{
                        "id": 38,
                        "name": "Section-16 (i) Professional Tax",
                        "limit": 2500,
                        "tax_type": 38
                    }, {
                        "id": 39,
                        "name": "Section-16 (ii) Entertainment Allowance",
                        "limit": 60000,
                        "tax_type": 39
                    }]
                }, {
                    "sec_no": "Section24",
                    "sec_name": "Section 24",
                    "details": [{
                        "id": 35,
                        "name": "Income From House",
                        "limit": null,
                        "tax_type": 35
                    }, {
                        "id": 36,
                        "name": "Home Loan Interest",
                        "limit": 200000,
                        "tax_type": 36
                    }, {
                        "id": 37,
                        "name": "Interest Paid on House Improvement",
                        "limit": 2000000,
                        "tax_type": 37
                    }, {
                        "id": 54,
                        "name": "House Government\/Municipal Tax Paid",
                        "limit": null,
                        "tax_type": 54
                    }, {
                        "id": 55,
                        "name": "Own House Government\/Municipal Tax Paid",
                        "limit": null,
                        "tax_type": 55
                    }, {
                        "id": 56,
                        "name": "Own Home Loan Interest",
                        "limit": 2000000,
                        "tax_type": 56
                    }]
                }]
            }, {
                "_id": {
                    "parent_sec_no": "house_rent_detail",
                    "parent_name": "House Rent Detail",
                    "parent_order": 4
                },
                "detail": [{
                    "sec_no": "Landlord_info",
                    "sec_name": "Landlord Details ( If House rent > 100000)",
                    "details": [{
                        "id": 48,
                        "name": "Land Lord Detail",
                        "limit": null,
                        "tax_type": 48
                    }]
                }, {
                    "sec_no": "rent_info",
                    "sec_name": "House Rent Paid\/Payable",
                    "details": [{
                        "id": 47,
                        "name": "House Rent Detail",
                        "limit": null,
                        "tax_type": 47
                    }]
                }]
            }, {
                "_id": {
                    "parent_sec_no": "other_income_detail",
                    "parent_name": "Other Income Detail",
                    "parent_order": 5
                },
                "detail": [{
                    "sec_no": "other",
                    "sec_name": "Other Income Detail",
                    "details": [{
                        "id": 50,
                        "name": "Business & Profession",
                        "limit": null,
                        "tax_type": 50
                    }, {
                        "id": 53,
                        "name": "Other Source",
                        "limit": null,
                        "tax_type": 53
                    }, {
                        "id": 61,
                        "name": "Long-term capital gains (Except on sale of equity shares\/ units of equity oriented fund). Tax applicable - 20%",
                        "limit": null,
                        "tax_type": 61
                    }, {
                        "id": 62,
                        "name": "Long-term capital gains (On sale of Equity shares\/ units of equity oriented fund). Tax applicable - 10% over and above Rs 1 lakh",
                        "limit": null,
                        "tax_type": 62
                    }, {
                        "id": 63,
                        "name": "Short-term capital gains (When securities transaction tax is not applicable). Tax applicable - The short-term capital gain is added to your income tax return and the taxpayer is taxed according to his income tax slab",
                        "limit": null,
                        "tax_type": 63
                    }, {
                        "id": 64,
                        "name": "Short-term capital gains (When securities transaction tax is applicable). Tax applicable - 15%",
                        "limit": null,
                        "tax_type": 64
                    }]
                }]
            }]
        };
        var dataList = {
            "status": "success",
            "message": "Tax Saving details",
            "data": {
                "48": {
                    "_id": "5f23e575654284103c000038",
                    "legal_entity_id": "5cd9359c6542848053000029",
                    "emp_id": "5822cd89ec95754c1c00002c",
                    "tax_id": 48,
                    "parent_sec_no": "house_rent_detail",
                    "parent_name": "House Rent Detail",
                    "sec_no": "Landlord_info",
                    "sec_name": "Landlord Details ( If House rent > 100000)",
                    "sec_limit": null,
                    "status": 1,
                    "landlord_detail": [{
                        "name": "Mr Xyz",
                        "address": "Sanjay Gram",
                        "city": "Gurgaon",
                        "pincode": "122001",
                        "pan_no": "BTHPK1440D",
                        "_id": {
                            "$id": "5f23e575654284103c000037"
                        }
                    }],
                    "is_uploaded_landlord": false,
                    "updated_by": "5822cd89ec95754c1c00002c",
                    "updated_at": "2020-07-31 15:03:41",
                    "created_at": "2020-07-31 15:03:41"
                },
                "47": {
                    "_id": "5f23e575654284103c00003a",
                    "legal_entity_id": "5cd9359c6542848053000029",
                    "emp_id": "5822cd89ec95754c1c00002c",
                    "tax_id": 47,
                    "parent_sec_no": "house_rent_detail",
                    "parent_name": "House Rent Detail",
                    "sec_no": "rent_info",
                    "sec_name": "House Rent Paid\/Payable",
                    "sec_limit": null,
                    "status": 1,
                    "rent_detail": [{
                        "is_metro": false,
                        "from_date": "01\/04\/2020",
                        "end_date": "30\/04\/2020",
                        "from_timestamp": 1585679400,
                        "end_timestamp": 1588185000,
                        "amount": 10000,
                        "address": "Sanjay Gram",
                        "city": "Gurgaon",
                        "pincode": "122001",
                        "landlord_id": "5f23e575654284103c000037",
                        "_id": {
                            "$id": "5f23e575654284103c000039"
                        },
                        "landlord_info_id": "5f23e575654284103c000038",
                        "landlord_name": "Mr Xyz",
                        "landlord_address": "Sanjay Gram",
                        "landlord_city": "Gurgaon",
                        "landlord_pincode": "122001",
                        "landlord_pan": "BTHPK1440D"
                    }, {
                        "is_metro": false,
                        "from_date": "01\/05\/2020",
                        "end_date": "31\/05\/2020",
                        "from_timestamp": 1588271400,
                        "end_timestamp": 1590863400,
                        "amount": 10000,
                        "address": "Sanjay Gram",
                        "city": "Gurgaon",
                        "pincode": "122001",
                        "landlord_id": "5f23e575654284103c000037",
                        "_id": {
                            "$id": "5f23e799654284e82700003f"
                        },
                        "landlord_info_id": "5f23e575654284103c000038",
                        "landlord_name": "Mr Xyz",
                        "landlord_address": "Sanjay Gram",
                        "landlord_city": "Gurgaon",
                        "landlord_pincode": "122001",
                        "landlord_pan": "BTHPK1440D"
                    }, {
                        "is_metro": false,
                        "from_date": "01\/06\/2020",
                        "end_date": "30\/06\/2020",
                        "from_timestamp": 1590949800,
                        "end_timestamp": 1593455400,
                        "amount": 10000,
                        "address": "Sanjay Gram",
                        "city": "Gurgaon",
                        "pincode": "122001",
                        "landlord_id": "5f23e575654284103c000037",
                        "_id": {
                            "$id": "5f28fde16542841c12000034"
                        },
                        "landlord_info_id": "5f23e575654284103c000038",
                        "landlord_name": "Mr Xyz",
                        "landlord_address": "Sanjay Gram",
                        "landlord_city": "Gurgaon",
                        "landlord_pincode": "122001",
                        "landlord_pan": "BTHPK1440D"
                    }],
                    "is_uploaded_rent": false,
                    "updated_by": "5822cd89ec95754c1c00002c",
                    "updated_at": "2020-08-04 11:49:13",
                    "created_at": "2020-07-31 15:03:41"
                },
                "1": {
                    "_id": "5f23e6b8654284a80f000035",
                    "emp_id": "5822cd89ec95754c1c00002c",
                    "tax_id": 1,
                    "legal_entity_id": "5cd9359c6542848053000029",
                    "sec_no": "80C",
                    "sec_name": "Part-II Investment U\/s Sec 80C can be made upto Rs. 1.5 Lac together",
                    "parent_sec_no": "form_vi_a",
                    "parent_name": "Chapter VI A",
                    "is_uploaded_tax_declaration": false,
                    "amount_declared": 50000,
                    "updated_at": "2020-08-02 23:09:32",
                    "created_at": "2020-07-31 15:09:04",
                    "investment_claimed": [{
                        "is_uploaded_tax_claimed": false,
                        "status": 1,
                        "amount_claimed": 10000,
                        "reason": "",
                        "updated_by": "5822cd89ec95754c1c00002c",
                        "proof": "1596189819_1_5822cd89ec95754c1c00002c.png",
                        "proof_name": "duracloud_logo_12in (1).png",
                        "_id": {
                            "$id": "5f23ec7b654284a80f000036"
                        }
                    }, {
                        "is_uploaded_tax_claimed": false,
                        "status": 1,
                        "amount_claimed": 5000,
                        "reason": "",
                        "updated_by": "5822cd89ec95754c1c00002c",
                        "proof": "1596189926_1_5822cd89ec95754c1c00002c.png",
                        "proof_name": "duracloud_logo_12in (2).png",
                        "_id": {
                            "$id": "5f23ece6654284a80f000037"
                        }
                    }, {
                        "is_uploaded_tax_claimed": false,
                        "status": 1,
                        "amount_claimed": 3700,
                        "reason": "",
                        "updated_by": "5822cd89ec95754c1c00002c",
                        "proof": "1596389786_1_5822cd89ec95754c1c00002c.png",
                        "proof_name": "duracloud_logo_12in.png",
                        "_id": {
                            "$id": "5f26f99a654284743c00006d"
                        }
                    }],
                    "amount_claimed": 18700,
                    "claim_submitted": 3,
                    "claim_approved": 0,
                    "claim_pending": 3,
                    "claim_rejected": 0,
                    "amount_approved": 0
                },
                "2": {
                    "_id": "5f28f869654284281400006d",
                    "emp_id": "5822cd89ec95754c1c00002c",
                    "tax_id": 2,
                    "legal_entity_id": "5cd9359c6542848053000029",
                    "sec_no": "80C",
                    "sec_name": "Part-II Investment U\/s Sec 80C can be made upto Rs. 1.5 Lac together",
                    "parent_sec_no": "form_vi_a",
                    "parent_name": "Chapter VI A",
                    "investment_claimed": [{
                        "is_uploaded_tax_claimed": false,
                        "status": 1,
                        "amount_claimed": 2300,
                        "reason": "",
                        "updated_by": "5822cd89ec95754c1c00002c",
                        "proof": "1596520553_2_5822cd89ec95754c1c00002c.jpg",
                        "proof_name": "fndf.jpg",
                        "_id": {
                            "$id": "5f28f869654284281400006c"
                        }
                    }, {
                        "is_uploaded_tax_claimed": false,
                        "status": 1,
                        "amount_claimed": 1700,
                        "reason": "",
                        "updated_by": "5822cd89ec95754c1c00002c",
                        "_id": {
                            "$id": "5f28f883654284281400006e"
                        },
                        "proof": "1596520592_2_5822cd89ec95754c1c00002c.png",
                        "proof_name": "duracloud_logo_12in (2).png"
                    }, {
                        "is_uploaded_tax_claimed": false,
                        "status": 1,
                        "amount_claimed": 1000,
                        "reason": "",
                        "updated_by": "5822cd89ec95754c1c00002c",
                        "proof": "1596520607_2_5822cd89ec95754c1c00002c.png",
                        "proof_name": "duracloud_logo_12in.png",
                        "_id": {
                            "$id": "5f28f89f654284281400006f"
                        }
                    }, {
                        "is_uploaded_tax_claimed": false,
                        "status": 1,
                        "amount_claimed": 500,
                        "reason": "",
                        "updated_by": "5822cd89ec95754c1c00002c",
                        "_id": {
                            "$id": "5f28fc556542841c12000033"
                        }
                    }],
                    "amount_claimed": 5500,
                    "claim_submitted": 4,
                    "claim_approved": 0,
                    "claim_pending": 4,
                    "claim_rejected": 0,
                    "amount_approved": 0,
                    "updated_at": "2020-08-04 11:42:37",
                    "created_at": "2020-08-04 11:25:53"
                }
            }
        };
        var refresh = function () {
            angular.forEach(masterList, function (value, key) {
                angular.forEach(value.detail, function (innerValue, innerKey) {
                    angular.forEach(innerValue.details, function (v, k) {
                        v.amount = 0;
                        v.amount_declared = 0;
                        v.amount_claimed = 0;
                        v.amount_approved = 0;
                        if (v.id && angular.isDefined(dataList[v.id])) {
                            // amount_declared
                            // amount_claimed
                            // amount_approved
                            v.amount_declared = dataList[v.amount_declared];
                            v.amount_claimed = dataList[v.amount_claimed];
                            v.amount_approved = dataList[v.amount_approved];
                            v.amount = dataList[v.amount];
                        } else {
                            console.log('This key ' + v.id + ' does not exists in data list');
                        }
                    });
                });
            });
        };
        refresh();
        console.log(masterList);
        $scope.emplist = masterList;
        console.log($scope.emplist);
    });
