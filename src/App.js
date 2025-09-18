import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import FlightRow from './components/FlightRow';
import { flightsData } from './flightsData';

export default function App() {
  const [data] = useState(flightsData);
  const [sortKey, setSortKey] = useState('price-asc');
  const maxFlightPrice = Math.max(...flightsData.map(f => f.price));
  const minFlightPrice = Math.min(...flightsData.map(f => f.price));
  const [maxPrice, setMaxPrice] = useState(maxFlightPrice);
  const [query, setQuery] = useState('');

  // New filters
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const resetFilters = () => {
    setSortKey('price-asc');
    setMaxPrice(maxFlightPrice);
    setQuery('');
    setFrom('');
    setTo('');
    setDepartureDate('');
  };
  const filtered = useMemo(() => {
    let arr = data.filter(f => f.price <= Number(maxPrice));

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      arr = arr.filter(f =>
        f.airline.toLowerCase().includes(q)
      );
    }

    if (from) arr = arr.filter(f => f.from.toLowerCase().includes(from.toLowerCase()));
    if (to) arr = arr.filter(f => f.to.toLowerCase().includes(to.toLowerCase()));
    if (departureDate) arr = arr.filter(f => f.departureDate === departureDate);
    const [key, dir] = sortKey.split('-');
    arr.sort((a, b) => {
      if (key === 'price') return dir === 'asc' ? a.price - b.price : b.price - a.price;
      if (key === 'duration') return dir === 'asc' ? a.duration - b.duration : b.duration - a.duration;
      if (key === 'departure') {
        const toMin = t => { const [hh, mm] = t.split(':').map(Number); return hh * 60 + mm; }
        return dir === 'asc' ? toMin(a.departure) - toMin(b.departure) : toMin(b.departure) - toMin(a.departure);
      }
      return 0;
    });
    return arr;
  }, [data, sortKey, maxPrice, query, from, to, departureDate]);


  return (
    <div className="app">
      <Header />
      <main className="container">
        <section className="controls">
          <div className="top-controls" style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
            <div className="left-controls">
              <div className="sort-select">
                <label>Sort</label>
                <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
                  <option value="price-asc">Price (Low → High)</option>
                  <option value="price-desc">Price (High → Low)</option>
                  <option value="duration-asc">Duration (Short → Long)</option>
                  <option value="duration-desc">Duration (Long → Short)</option>
                  <option value="departure-asc">Departure (Early → Late)</option>
                  <option value="departure-desc">Departure (Late → Early)</option>
                </select>
              </div>
            </div>

            <div className="right-controls" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="search">
                <input
                  placeholder="Search airline"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="price-range">
                <label style={{ fontWeight: 'bold' }}>Max Price</label>
                <input
                  type="range"
                  min={minFlightPrice}
                  max={maxFlightPrice}   // dynamically set
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="price-value">KWD {maxPrice}</div>
              </div>

            </div>
          </div>

          {/* Additional filters below both controls */}
          <div className="additional-filters">
            <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
            <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
            <input
              type="text"
              placeholder="Departure Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => !e.target.value && (e.target.type = "text")}
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
            <button className="reset-btn" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>
        </section>


        <section className="list">
          {filtered.length === 0 ? (
            <div className="no-results">No flights match your criteria</div>
          ) : (
            filtered.map(f => <FlightRow key={f.id} flight={f} />)
          )}
        </section>
      </main>
    </div>
  );
}
