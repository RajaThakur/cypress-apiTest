describe('Api test', () => {

    const baseURL = 'https://helloacm.com/api';

    it('valid month, date, year in mm/dd/yy format', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-01-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response).to.have.property('status')
            expect(response.status, '').to.equal(200);
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')


        })
    })

    it('wrong month, year and date format is accepted. in yy/dd/mm', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-01-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response).to.have.property('status')
            expect(response.status, '').to.equal(200);
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')

        })
    })

    it('field accepts the input as blank', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=',
            failOnStatusCode: false
        }).then((response) => {
            expect(response).to.have.property('status')
            expect(response.status, '').to.equal(200);
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')


        })
    })

    it('field accepts with backword slash', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016/01/01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response).to.have.property('status')
            expect(response.status, '').to.equal(200);
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')


        })
    })

    it('field accepts with forward slash', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016\\01\\01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response).to.have.property('status')
            expect(response.status, '').to.equal(200);
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')


        })
    })

    it('field accepts special character instead of the dates', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-01-@%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response).to.have.property('status')
            expect(response.status, '').to.equal(200);
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')


        })
    })

    it('field accepts more than 4 digits for the year', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=20166-01-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response).to.have.property('status')
            expect(response.status, '').to.equal(200);
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')


        })
    })

    it('field accepts zero in all fields of the box', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=0000-00-00%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response).to.have.property('status')
            expect(response.status, '').to.equal(200);
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')


        })
    })

    it('field accepts blank field for one of the part of the date format', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-01-%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response).to.have.property('status')
            expect(response.status, '').to.equal(200);
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')


        })
    })

    it('field accepts alphabets in the date format', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-april-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response).to.have.property('status')
            expect(response.status, '').to.equal(200);
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')


        })
    })

    it('date as 32 is accepted or not', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-01-32%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response).to.have.property('status')
            expect(response.status, '').to.equal(200);
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')


        })
    })

    it('month field accepts 13 or higher number or flags errors', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-13-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);

        })
    })

    it('year is accepted in 3 digits or 2 digits', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=206-01-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);

        })


    })

    it('February 30 or 31 is accepted in the date format', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2020-02-31%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);

        })

    })

    it('decimal point is accepted instead of hyphen or slashes (- or /)', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=016.01.01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);

        })


    })

    it('blank spaces are accepted in the date format fields', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-01-24 %202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(220);

        })


    })

    it('blank space after year', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016 -01-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);


        })
    })

    it('Whether the date field allows a unique character or not', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-01@-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);

        })
    })

    it('blank space after date', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-01-01 %202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);

        })
    })

    it('blank space after month', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-01 -01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);

        })
    })

    it('zeros in the date', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-01-00%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);

        })
    })

    it('zeros in the month', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-00-22%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);

        })
    })

    it('alphabetic and alphanumeric data in the field', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=abc-01-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);

        })
    })

    it('Enter a decimal point', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-0.1-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(429);

        })
    })

    it('invalid date and valid month, and valid year', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-01-35%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(200);


        })
    })

    it('valid date and invalid month, and valid year', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=2016-14-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(200);


        })
    })

    it('valid date and valid month, and invalid year', () => {
        cy.request({
            method: 'GET',
            url: baseURL + '/unix-timestamp-converter/?cached&s=20167-01-01%202:3:22',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status, '').to.equal(200);

        })

    })
})