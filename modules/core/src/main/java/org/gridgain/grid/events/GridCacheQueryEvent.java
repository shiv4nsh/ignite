/* @java.file.header */

/*  _________        _____ __________________        _____
 *  __  ____/___________(_)______  /__  ____/______ ____(_)_______
 *  _  / __  __  ___/__  / _  __  / _  / __  _  __ `/__  / __  __ \
 *  / /_/ /  _  /    _  /  / /_/ /  / /_/ /  / /_/ / _  /  _  / / /
 *  \____/   /_/     /_/   \_,__/   \____/   \__,_/  /_/   /_/ /_/
 */

package org.gridgain.grid.events;

import org.gridgain.grid.*;
import org.gridgain.grid.lang.*;
import org.gridgain.grid.util.tostring.*;
import org.gridgain.grid.util.typedef.internal.*;
import org.jetbrains.annotations.*;

import java.util.*;

/**
 * Cache query event.
 */
public class GridCacheQueryEvent extends GridEventAdapter {
    /** Cache name. */
    private final String cacheName;

    /** Class name. */
    private final String clsName;

    /** Clause. */
    private final String clause;

    /** Scan query filter. */
    @GridToStringInclude
    private final GridBiPredicate<?, ?> scanFilter;

    /** Query arguments. */
    @GridToStringInclude
    private final Object[] args;

    /** */
    private final UUID subjId;

    /**
     * @param node Node where event was fired.
     * @param msg Event message.
     * @param type Event type.
     * @param cacheName Cache name.
     * @param clsName Class name.
     * @param clause Clause.
     * @param scanFilter Scan query filter.
     * @param args Query arguments.
     * @param subjId Security subject ID.
     */
    public GridCacheQueryEvent(GridNode node, String msg, int type, @Nullable String cacheName,
        @Nullable String clsName, @Nullable String clause, @Nullable GridBiPredicate<?, ?> scanFilter,
        @Nullable Object[] args, @Nullable UUID subjId) {
        super(node, msg, type);

        this.cacheName = cacheName;
        this.clsName = clsName;
        this.clause = clause;
        this.scanFilter = scanFilter;
        this.args = args;
        this.subjId = subjId;
    }

    /**
     * Gets cache name on which query was executed.
     *
     * @return Cache name.
     */
    @Nullable public String cacheName() {
        return cacheName;
    }

    /**
     * Gets queried class name.
     * <p>
     * Applicable for {@code SQL} and @{code full text} queries.
     *
     * @return Queried class name.
     */
    @Nullable public String className() {
        return clsName;
    }

    /**
     * Gets query clause.
     * <p>
     * Applicable for {@code SQL}, {@code SQL fields} and @{code full text} queries.
     *
     * @return Query clause.
     */
    @Nullable public String clause() {
        return clause;
    }

    /**
     * Gets query filter.
     * <p>
     * Applicable for {@code scan} and {@code continuous} queries.
     *
     * @return Query filter.
     */
    @Nullable public GridBiPredicate<?, ?> scanFilter() {
        return scanFilter;
    }

    /**
     * Gets query arguments.
     * <p>
     * Applicable for {@code SQL} and {@code SQL fields} queries.
     *
     * @return Query arguments.
     */
    @Nullable public Object[] arguments() {
        return args;
    }

    /**
     * Gets security subject ID.
     *
     * @return Security subject ID.
     */
    @Nullable public UUID subjectId() {
        return subjId;
    }

    /** {@inheritDoc} */
    @Override public String toString() {
        return S.toString(GridCacheQueryEvent.class, this,
            "nodeId8", U.id8(node().id()),
            "msg", message(),
            "type", name(),
            "tstamp", timestamp());
    }
}
