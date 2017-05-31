import { expect } from 'chai'
import whoDate from '../src/whoDate'

describe('6. Who Wants A Date?', () => {
  it('Changes all dates to ISO 8601 format', function(){
    var date = "01/11/55" //mm/dd/yy
    expect(whoDate(date)).to.equal('1955-01-11');
  })
  it('Changes all dates to ISO 8601 format', function(){
    var date = "09#65#21" //mm#yy#dd
    expect(whoDate(date)).to.equal("1965-09-21");
  })
  it('Changes all dates to ISO 8601 format', function(){
    var date = "06*04*1965" //dd*mm*yyyy
    expect(whoDate(date)).to.equal("1965-04-06");
  })
  it('Changes all dates to ISO 8601 format', function(){
    var date = "Oct 25, 58" //(month in words) dd, yy
    expect(whoDate(date)).to.equal("1958-10-25");
  })
  it('Changes all dates to ISO 8601 format', function(){
    var date = "Mar 21, 1980" //(month in words) dd, yyyy
    expect(whoDate(date)).to.equal("1980-03-21");
  })
})
